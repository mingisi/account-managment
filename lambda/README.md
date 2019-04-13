h2. Setup

for billing create a `env.yml` file with the following content:
```
production:
  stripeSecretKey: "<key>"

default:
  stripeSecretKey: ""<key>""

```

h2. Testing Services 

e.g billing

`serverless invoke local --function billing --path mocks/billing-event.json`

h2. Packaging 

`serverless package`


h2. Deploying
`serverless deploy`