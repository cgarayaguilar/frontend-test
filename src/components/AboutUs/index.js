import Typography from 'components/Typography'
import React from 'react'
import {
  Container,
  AboutRadix,
  ListOfProducts,
  Product,
  Badge,
  ProductTitle,
  ProductDescription,
} from './styles'
import { products } from 'services/products'
import randomKey from 'utils/random-key.util'

function AboutUs() {
  return (
    <Container>
      <AboutRadix>
        <Typography variant="title2" value="What is Radix Haven?" mb="24px" />
        <Typography
          variant="body"
          value="We answer all your data questions in real-time and help you automate all actions required to apply these insights into practice. And we do this by providing you a secure cloud-based and easy to use Data Science Platform where you can easily integrate and combine multiple data sources, task management tools, and communication apps to enhance your workflow."
        />
      </AboutRadix>

      <ListOfProducts>
        {products.map((product, index) => (
          <Product key={randomKey()}>
            <ProductTitle>
              <Badge>{index + 1}</Badge>
              <Typography variant="title3" value={product.title} />
            </ProductTitle>
            <ProductDescription>
              <Typography variant="body" value={product.description} />
            </ProductDescription>
          </Product>
        ))}
      </ListOfProducts>
    </Container>
  )
}

export default AboutUs
