import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap";

export function Store(){
    return (
        <>
        <h1>Store</h1>

        <Row>
            {storeItems.map(x => (
                <Col>{JSON.stringify(x)}</Col>
            ))}
        </Row>
        </>
    )
}