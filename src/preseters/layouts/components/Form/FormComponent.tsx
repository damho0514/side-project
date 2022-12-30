import React from "react";
import { Form } from "antd";
import { FormProps, FormItemProps } from "antd/lib/form";

import "./FormComponent.scss";

// Form.create() is deprecated on ant.design 4.x.
const FormComponent = (props: FormProps) => <Form className="form" />;

const Item = (props: FormItemProps) => (
    <Form.Item className="form__item" {...props} />
);

FormComponent.Item = Item;
FormComponent.useForm = Form.useForm;

export default FormComponent;
