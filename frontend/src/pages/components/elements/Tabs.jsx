import React from 'react'
import { Head, Block, Card, Icon } from '../../../componenets'
import { Tab } from '@headlessui/react'

const TabsPage = () => {
  return (
    <>
        <Head title="Tabs Nav" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Tabs Nav</Block.TitleLg>
              <Block.LeadText>Here is some custom style Tab using <a target="_blank" className="text-primary-600 hover:text-primary-800" href="https://headlessui.com/react/tabs">HeadlessUI Tab</a> component .</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Basic Examples</Block.Title>
                <Block.Text>Checkout our awesome tab component.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Tab.Group>
                  <Tab.List as="ul" className="tab-nav flex flex-wrap font-heading text-sm border-b border-gray-300 dark:border-gray-900 -mt-4">
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Personal</Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Security</Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Notifications</Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Connect</Tab>
                    </li>
                  </Tab.List>
                  <Tab.Panels className="tab-content mt-5">
                    <Tab.Panel>
                      <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incid.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.</p>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>With Icon</Block.Title>
                <Block.Text>Checkout our awesome tab component with icons.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Tab.Group>
                  <Tab.List as="ul" className="tab-nav flex flex-wrap font-heading text-sm border-b border-gray-300 dark:border-gray-900 -mt-4">
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">
                        <Icon className="text-xl" name="user" />
                        <span className="ms-2">Personal</span>
                      </Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">
                        <Icon className="text-xl" name="lock-alt" />
                        <span className="ms-2">Security</span>
                      </Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">
                        <Icon className="text-xl" name="bell" />
                        <span className="ms-2">Notifications</span>
                      </Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">
                        <Icon className="text-xl" name="link" />
                        <span className="ms-2">Connect</span>
                      </Tab>
                    </li>
                  </Tab.List>
                  <Tab.Panels className="tab-content mt-5">
                    <Tab.Panel>
                      <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incid.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.</p>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Alternet Tab style</Block.Title>
                <Block.Text>Tab component with centered style navigation.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Tab.Group>
                  <Tab.List as="ul" className="tab-nav flex flex-wrap justify-center font-heading text-sm -mt-4 -me-5 md:-me-6 lg:-me-7 xl:-me-9">
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Personal</Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Security</Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Notifications</Tab>
                    </li>
                    <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9">
                      <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Connect</Tab>
                    </li>
                  </Tab.List>
                  <Tab.Panels className="tab-content mt-5">
                    <Tab.Panel>
                      <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incid.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.</p>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default TabsPage