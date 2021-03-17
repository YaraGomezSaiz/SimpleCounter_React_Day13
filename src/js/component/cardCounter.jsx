//import react into the bundle
import React from "react";

//impor Proptypes
import PropTypes from "prop-types";

//include your index.scss file into the bundle
import "../../styles/index.scss";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Card from "react-bootstrap/Card";

export default function CardCounter(props) {
	return (
		<div>
			<Card className="customCard m-1 p-1 align-middle">
				<Card.Body className="d-flex justify-content-center ">
					{props.counter}
				</Card.Body>
			</Card>
		</div>
	);
}

CardCounter.propTypes = {
	counter: PropTypes.number
};
