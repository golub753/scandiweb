export const products = `{
    category(input: { title: "all" }) {
      products {
        id
        name
        inStock
        brand
        category
        gallery
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        description
        attributes {
          name, items {
            value, displayValue
          }
        }
      }
    }
  }`

export const links = `{
    categories {
      name
    }
  }`
  
export const clothes = `{
    category(input: { title: "clothes" }) {
      products {
        id
        name
        inStock
        brand
        category
        gallery
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        description
        attributes {
          name, items {
            value, displayValue
          }
        }
      }
    }
  }`

export const tech = `{
    category(input: { title: "tech" }) {
      products {
        id
        name
        inStock
        brand
        category
        gallery
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        description
        attributes {
          name, items {
            value, displayValue
          }
        }
      }
    }
  }`

export const currency = `{
    currencies {
        label
        symbol
    }
}`