import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    renderComments(comments) {

        const commentCustom = comments.map((comment) => {
            const date = new Date(comment.date).toLocaleDateString();
            return (
                <ul key={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
                    <br></br>
                    <li>-- {comment.author}, {comment.date}</li> 
                </ul>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                { commentCustom}
            </div>
        );

    }

    render() {

        if (this.props.dish != null) {

            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Dishdetail;