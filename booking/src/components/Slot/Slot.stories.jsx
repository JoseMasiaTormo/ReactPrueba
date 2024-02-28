import React from "react";
import Slot from "./Slot";

export default {
    component: Slot,
    title: 'Slot',
};

const Template = args => <Slot {...args} />

export const Default = Template.bind({});
Default.args = {
    slot: {
        startTime: '12:30:00',
        usersAvailable: '17',
        state: 'SLOT_DEFAULT'
    },
};

export const Selected = Template.bind({});
Selected.args = {
    slot: {
        ...Default.args.slot,
        state: 'SLOT_SELECTED',
    },
};

export const Disabled = Template.bind({});
Disabled.args = {
    slot: {
        ...Default.args.slot,
        state: 'SLOT_DISABLED',
    },
};

export const Loading = Template.bind({});
Loading.args = {
    slot: {
        ...Default.args.slot,
        state: 'SLOT_LOADING'
    }
}