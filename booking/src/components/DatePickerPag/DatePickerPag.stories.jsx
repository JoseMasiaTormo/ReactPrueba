import React from "react";
import DatePickerPag from "./DatePickerPag";

export default {
    component: DatePickerPag,
    title: 'DatePickerPag',
};

const Template = args => <DatePickerPag {...args} />

export const Default = Template.bind({});
Default.args = {
    date: new Date(),
    state: 'DATEPICKER_DEFAULT',
};