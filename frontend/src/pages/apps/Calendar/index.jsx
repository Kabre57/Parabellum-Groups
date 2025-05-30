import React, { Fragment, useState, useEffect } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Dialog, Transition } from '@headlessui/react'
import { events } from '../../../store/calender';
import { useTheme } from '../../../layout/context';
import PreviewModal from './PreviewModal';
import moment from 'moment';
import { useForm  } from "react-hook-form";
import { Button, Icon, Form, Input, Picker, TextArea, Head } from '../../../componenets';
import { eventOptions } from '../../../store/calender';
import CategorySelect from './CategorySelect';

const CalendarPage = () => {
  const theme = useTheme();
  const [demoEvents, setDemoEvents] = useState(events);
  const [event, setEvent] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [activeForm, setActiveForm] = useState('');

  const { reset, register, handleSubmit, formState: { errors } } = useForm();

  const [selectedCategory, setSelectedCategory] = useState(eventOptions[0])

  useEffect(() => {
      setFormData({ ...formData, theme: selectedCategory })
  }, [selectedCategory])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    endDate: new Date(),
    theme:{
      value: "fc-event-primary",
      label: "Company",
    }
  });

  const handleFormSubmit = (form) => {
    let newEvent = {
      id: "new-event-id-" + Math.floor(Math.random() * 9999999),
      title: formData.title,
      description: formData.description,
      start: `${moment(formData.startDate).format('YYYY-MM-DD')}${formData.startTime !== '' ? 'T'+moment(formData.startTime).format('HH:mm:ss') : ''}`,
      end: `${moment(formData.endDate).format('YYYY-MM-DD')}${formData.endTime !== '' ? 'T'+moment(formData.endTime).format('HH:mm:ss') : ''}`,
      className: `${formData.theme.value}`
    };

    let data = {
      title: formData.title,
      description: formData.description,
      startDate: formData.startDate,
      startTime: formData.startTime,
      endTime: formData.endDate,
      endDate: formData.endTime,
      theme: formData.theme,
    }
    setShowEdit(false);
    setFormData(data);
    if(activeForm === "add"){
      setDemoEvents([...demoEvents, newEvent])
    }
    if(activeForm === "edit"){
      let filteredEvents = demoEvents.filter((item) => item.id !== event.id);
      setDemoEvents([...filteredEvents, newEvent])
    }
  };

  const handleEventClick = (info) => {
    const event = demoEvents.find((item) => item.id === info.event._def.publicId);
    setEvent(event);
    setShowPreview(true)
  };

  const deleteEvent = (id) => {
    let filteredEvents = demoEvents.filter((item) => item.id !== id);
    setDemoEvents(filteredEvents);
  };
  const editEvent = (id) => {
    setFormData({
      title: event.title,
      description:  event.description,
      startDate: event.start ? moment(event.start)._d : '',
      startTime: event.start ? moment(event.start)._d : '',
      endTime: event.end ? moment(event.end)._d : '',
      endDate: event.end ? moment(event.end)._d : '',
      theme:{
        value: "fc-event-primary",
        label: "Company",
      }
    })
    let theme = eventOptions.filter((item) => item.value === event.className);
    setSelectedCategory(theme[0]);
    setShowEdit(true);
    setActiveForm('edit');
  };
  const addEvent = () => {
    setShowEdit(true);
    setFormData({
      title: "",
      description: "",
      startDate: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      endDate: new Date(),
      theme:{
        value: "fc-event-primary",
        label: "Company",
      }
    })
    setSelectedCategory(eventOptions[0]);
    setActiveForm('add');
  };

  useEffect(() => {
    reset(formData);
  }, [formData]);

  return (
    <>
        <Head title="Calendar" />
      <div className="flex justify-between items-center pb-5 md:pb-7 relative">
          <div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white">
                  Calendar
              </h3>
          </div>
          <div>
              <Button size="rg" variant="primary" onClick={()=> addEvent() }>
                  <Icon className="text-xl/4.5" name="plus" /><span className="ms-3">Add Event</span>
              </Button>
          </div>
      </div>
      <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900  p-5 sm:p-6">
          <div className="js-calendar" id="fullCalendar"></div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            events={demoEvents}
            eventClick={(info) => handleEventClick(info)}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "title prev,next",
              center: null,
              right: "today dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            themeSystem="standard"
            height={800}
            contentHeight={780}
            aspectRatio={3}
            editable={true}
            droppable={true}
            views = {{
                dayGridMonth: {
                    dayMaxEventRows: 2,
                }
            }}
            direction= {theme.direction}
            nowIndicator= {true}
          />
      </div>
      <PreviewModal show={showPreview} setShow={setShowPreview} data={event} onDelete={deleteEvent} onEdit={editEvent} />
      <Transition appear show={showEdit} as={Fragment}>
        <Dialog as="div" className="relative z-[5000]" onClose={() => setShowEdit(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-slate-700/50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 -translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-6"
                >
                    <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full md:w-[600px] sm:w-[520px] mx-auto text-start">
                        <div className="modal-header flex items-center justify-between px-5 sm:px-6 py-3 sm:py-4 rounded-t-md border-b border-gray-200 dark:border-gray-900">
                            <h4 className="modal-title fc-form-title text-xl font-heading font-bold text-slate-700 dark:text-white">{activeForm === 'edit' ? 'Edit' : "Add"} Event</h4>
                            <button onClick={() => setShowEdit(false)} className="text-current dark:text-current opacity-80 hover:opacity-100 transition-all duration-300">
                                <Icon className="text-xl" name="cross"></Icon>
                            </button>
                        </div>
                        <form className="js-validate floating-feedbacks" onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className="modal-body px-5 sm:px-6 py-4 sm:py-5">
                                <div className="flex flex-wrap -m-3.5">
                                    <div className="w-full p-3.5">
                                        <Form.Group>
                                            <Form.Label className="mb-2" htmlFor="fv-full-name-floating">Event Title</Form.Label>
                                            <Input.Wrap>
                                                <Input id="eventTitle" placeholder="Event Title" name="fv-full-name-floating" 
                                                    {...register('eventTitle', { required: true })}
                                                    value={formData.title}
                                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                />
                                                {errors.eventTitle && <Form.Error floating />}
                                            </Input.Wrap>
                                        </Form.Group>
                                    </div>
                                    <div className="w-full sm:w-1/2 p-3.5">
                                        <Form.Group>
                                            <Form.Label htmlFor="eventStartDate" className="mb-2">Event Starts</Form.Label>
                                            <div className="flex flex-wrap -m-1.5">
                                                <div className="w-7/12 p-1.5">
                                                    <Input.Wrap>
                                                        <Picker.Date id="eventStartDate" placeholder="yyyy-mm-dd" 
                                                            selected={formData.startDate}
                                                            onChange={(date) => setFormData({ ...formData, startDate: date })}
                                                        />
                                                    </Input.Wrap>
                                                </div>
                                                <div className="w-5/12 p-1.5">
                                                    <Input.Wrap>
                                                        <Picker.Time id="eventStartTime" placeholder="hh-mm" format={24} 
                                                            selected={formData.startTime}
                                                            onChange={(time) => setFormData({ ...formData, startTime: time })}
                                                        />
                                                    </Input.Wrap>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="w-full sm:w-1/2 p-3.5">
                                        <Form.Group>
                                            <Form.Label htmlFor="eventEndDate" className="mb-2">Event Ends</Form.Label>
                                            <div className="flex flex-wrap -m-1.5">
                                                <div className="w-7/12 p-1.5">
                                                    <Input.Wrap>
                                                        <Picker.Date id="eventEndDate" placeholder="yyyy-mm-dd" 
                                                            selected={formData.endDate}
                                                            onChange={(date) => setFormData({ ...formData, endDate: date })}
                                                        />
                                                    </Input.Wrap>
                                                </div>
                                                <div className="w-5/12 p-1.5">
                                                    <Input.Wrap>
                                                        <Picker.Time id="eventEndTime" placeholder="hh-mm" format={24} 
                                                            selected={formData.endTime}   
                                                            onChange={(date) => setFormData({ ...formData, endTime: date })}
                                                        />
                                                    </Input.Wrap>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="w-full p-3.5">
                                        <Form.Group>
                                            <Form.Label htmlFor="eventDescription" className="mb-2">Event Description</Form.Label>
                                            <Input.Wrap>
                                                <TextArea id="eventDescription" placeholder="Event Description"
                                                    {...register('description', { required: true })}
                                                    value={formData.description}
                                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                ></TextArea>
                                                {errors.description && <Form.Error floating />}
                                            </Input.Wrap>
                                        </Form.Group>
                                    </div>
                                    <div className="w-full p-3.5">
                                        <Form.Group className="fc-category-select">
                                            <Form.Label htmlFor="eventCategory" className="mb-2">Event Category</Form.Label>
                                            <Input.Wrap>
                                                <CategorySelect selected={selectedCategory} setSelected={setSelectedCategory} data={eventOptions} />
                                            </Input.Wrap>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer flex items-center justify-between px-5 sm:px-6 pb-4 sm:pb-5 gap-3">
                                <Button size="rg" variant="primary" type="submit">{activeForm === 'edit' ? 'Update' : "Add"} Event</Button>
                                <Button size="rg" variant="red-pale" onClick={() => setShowEdit(false)}>Discard</Button>
                            </div>
                        </form>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default CalendarPage