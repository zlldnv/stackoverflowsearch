import React from "react";
import { Card } from "@material-ui/core";
import "./answers.css";

export default ({ answers }) =>
  answers.map(item => (
    <Card className="card">
      {<div dangerouslySetInnerHTML={{ __html: item.body }} />}
    </Card>
  ));