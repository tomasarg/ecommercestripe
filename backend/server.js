var config = require('./config');
const stripe = require('stripe')(config.STRIPE.SECRET_KEY)
const express = require('express');
const cors = require('cors');
const { Console } = require('console');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static('public'));

app.post('/checkout-session', async (req, res) => {
  try {
    const payLoad = {
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: config.SHOP.URL + '/#/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: config.SHOP.URL,
      line_items: []
    }

    req.body.items.forEach(function (item) {
      payLoad.line_items.push(
        {
          price_data: {
            product_data: {
              name: item.name,
              description: item.details,
              images: [item.image]
            },
            currency: 'usd',
            unit_amount: item.price * 100,
          },
          quantity: 1,
        }
      )
    });

    const session = await stripe.checkout.sessions.create(
      payLoad, {
      idempotencyKey: req.body.idempotencyKey,
    });

    res.status(200).json({ id: session.id });
  }
  catch (err) {
    return res.status(500).send(err.message)
  }
});

app.get('/checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);
    res.status(200).json({
      customer: session.customer_details,
      payment_intent: session.payment_intent,
      amount: session.amount_total/100
    });
  }
  catch (err) {
    return res.status(500).send(err.message)
  }
});


app.listen(5000, () => console.log(`Listening on port ${5000}!`));