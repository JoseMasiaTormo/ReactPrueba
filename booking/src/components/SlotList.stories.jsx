import React from "react";
import SlotList from "./SlotList";
import * as SlotStories from './Slot.stories';

export default {
    component: SlotList,
    title: 'SlotList',
    decorators: [story => <div style={{padding: '3rem'}}>{story()}</div>],
};

const Template = args => <SlotList {...args} />;

export const Default = Template.bind({});
Default.args = {
    slots: [
        { ...SlotStories.Default.args.slot, startTime: '12:30:00', usersAvailable: '17'},
        { ...SlotStories.Default.args.slot, startTime: '12:45:00', usersAvailable: '17'},
        { ...SlotStories.Default.args.slot, startTime: '13:00:00', usersAvailable: '17'},
        { ...SlotStories.Default.args.slot, startTime: '13:15:00', usersAvailable: '17'},
        { ...SlotStories.Default.args.slot, startTime: '13:30:00', usersAvailable: '17'},
        { ...SlotStories.Default.args.slot, startTime: '13:45:00', usersAvailable: '17'},
        { ...SlotStories.Default.args.slot, startTime: '14:00:00', usersAvailable: '17'},
        { ...SlotStories.Default.args.slot, startTime: '14:15:00', usersAvailable: '17'},
    ],
};

export const WithCheckedSlots = Template.bind({});
WithCheckedSlots.args = {
    slots: [
        ...Default.args.slots.slice(0, 8),
        { ...SlotStories.Default.args.slot, startTime: '14:30:00', usersAvailable: '17', state: "SLOT_SELECTED"},
    ]
};

export const Loading = Template.bind({});
Loading.args = {
    slots: [],
    isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    isLoading: false,
};