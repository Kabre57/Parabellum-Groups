import React from 'react'
import { Head, Alert, Block, Card } from '../../../componenets'

const Alerts = () => {
  return (
    <>
        <Head title="Alerts" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Alerts Styles</Block.TitleLg>
              <Block.LeadText>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Examples - Default Style</Block.Title>
                <Block.Text>Here is some basic example for designed alert components</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="grid grid-cols-1 gap-6">
                  <Alert icon="alert-circle" variant="primary">
                    <p className="text-sm"><strong>Order has been placed</strong>. Your will be redirect for make your payment.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="secondary">
                    <p className="text-sm"><strong>Order has been placed</strong>. Your will be redirect for make your payment.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="green">
                    <p className="text-sm"><strong>Thanks for your deposit</strong>. Your account balance has been updated accordingly.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="cyan">
                    <p className="text-sm"><strong>Order has been placed</strong>. Your will be redirect for make your payment.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="yellow">
                    <p className="text-sm">Your credit card <strong>already expired</strong>. Please enter a valid & up-to-date <Alert.Link href="#link">credit card</Alert.Link> for make deposit.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="red">
                    <p className="text-sm"><strong>Update failed!</strong>. There is some technical issues.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="light">
                  <p className="text-sm">Your credit card <strong>already expired</strong>. Please enter a valid & up-to-date <Alert.Link href="#link">credit card</Alert.Link> for make deposit.</p>
                  </Alert>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Card>
              <Card.Body>
                <div className="grid grid-cols-1 gap-6">
                  <Alert icon="alert-circle" variant="primary-fill">
                    <p className="text-sm"><strong>Order has been placed</strong>. Your will be redirect for make your payment.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="secondary-fill">
                    <p className="text-sm"><strong>Order has been placed</strong>. Your will be redirect for make your payment.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="green-fill">
                    <p className="text-sm"><strong>Thanks for your deposit</strong>. Your account balance has been updated accordingly.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="cyan-fill">
                    <p className="text-sm"><strong>Order has been placed</strong>. Your will be redirect for make your payment.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="yellow-fill">
                    <p className="text-sm">Your credit card <strong>already expired</strong>. Please enter a valid & up-to-date <Alert.Link href="#link">credit card</Alert.Link> for make deposit.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="red-fill">
                    <p className="text-sm"><strong>Update failed!</strong>. There is some technical issues.</p>
                  </Alert>
                  <Alert icon="alert-circle" variant="light-fill">
                  <p className="text-sm">Your credit card <strong>already expired</strong>. Please enter a valid & up-to-date <Alert.Link href="#link">credit card</Alert.Link> for make deposit.</p>
                  </Alert>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Examples - Style Pro</Block.Title>
                <Block.Text>Here is some pro example styled alert components</Block.Text>
            </Block.Head>
            <div className="grid grid-cols-1 gap-6">
              <Alert.Pro variant="primary">
                <h6 className="text-base font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Your Order Placed</h6>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Your order has been successfully placed for diposit. Your will be redirect for make your payment. </p>
              </Alert.Pro>
              <Alert.Pro variant="secondary">
                <h6 className="text-base font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Your Order Placed</h6>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Your order has been successfully placed for diposit. Your will be redirect for make your payment. </p>
              </Alert.Pro>
              <Alert.Pro variant="green">
                <h6 className="text-base font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Payment Successfully Made</h6>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Thanks for your deposit. Now you can see your transaction history. Your account has been updated accordingly. </p>
              </Alert.Pro>
              <Alert.Pro variant="cyan">
                <h6 className="text-base font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Your Order Placed</h6>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Your order has been successfully placed for diposit. Your will be redirect for make your payment. </p>
              </Alert.Pro>
              <Alert.Pro variant="yellow">
                <h6 className="text-base font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Payment Information</h6>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Sorry! your credit card already expired. Please enter a valid & up-to-date credit card for make deposit. </p>
              </Alert.Pro>
              <Alert.Pro variant="red">
                <h6 className="text-base font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Order Cancelled</h6>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Your order has been cancelled due to received your payment. </p>
              </Alert.Pro>
              <Alert.Pro variant="light">
                <h6 className="text-base font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Your Order Placed</h6>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Your order has been successfully placed for diposit. Your will be redirect for make your payment. </p>
              </Alert.Pro>
            </div>
          </Block>

        </div>
    </>
  )
}

export default Alerts