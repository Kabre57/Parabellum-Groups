import React from 'react'
import { Head, Block, Card, Toast } from '../../../componenets'

const ToastPage = () => {
  return (
    <>
        <Head title="Toast" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Toast</Block.TitleLg>
              <Block.LeadText>Push notifications to your visitors with toast, a customizable alert message.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Basic Examples</Block.Title>
                <Block.Text>Toasts are lightweight notifications designed to mimic the push notifications.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Toast>
                  <Toast.Header title="Tailwind" subtitle="11 mins ago" />
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Stacked Examples</Block.Title>
                <Block.Text>Here is multiple toast stacked togather.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Toast>
                  <Toast.Header title="Tailwind" subtitle="Just Now" />
                  <Toast.Body>
                    See? Just like this.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Header title="Tailwind" subtitle="2 seconds ago" />
                  <Toast.Body>
                    Heads up, toasts will stack automatically
                  </Toast.Body>
                </Toast>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Color Scheme Examples</Block.Title>
                <Block.Text>Here is some example .</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Toast variant="primary">
                  <Toast.Header variant="primary" title="Primary" subtitle="Just Now" />
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                <Toast variant="yellow">
                  <Toast.Header variant="yellow" title="Yellow" subtitle="Just Now" />
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                <Toast variant="green">
                  <Toast.Header variant="green" title="Green" subtitle="Just Now" />
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                <Toast variant="red">
                  <Toast.Header variant="red" title="Red" subtitle="Just Now" />
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                <Toast variant="cyan">
                  <Toast.Header variant="cyan" title="cyan" subtitle="Just Now" />
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                <Toast variant="dark">
                  <Toast.Header variant="dark" title="Dark" subtitle="Just Now" />
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default ToastPage