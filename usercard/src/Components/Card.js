import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from "reactstrap";

function UserCard(props) {
    return (
        <Card key={props.user.id}>
            <CardBody>
            <CardTitle>{props.user.name}</CardTitle>
            <CardSubtitle>{props.user.login}</CardSubtitle>
            </CardBody>
            <CardImg width="25%" src={props.user.avatar_url} alt={props.user.name} />
            <CardBody>
            <CardText>{props.user.bio}</CardText>
            <CardLink href={props.user.html_url}>GitHub</CardLink>
            </CardBody>
        </Card>
    )
};
export default UserCard;