import { Component, h, VNode } from "preact";
import { Booking } from "../../models/booking";
import {
    Button,
    Form,
    FormGroup,
    FormText,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label
} from "reactstrap";
import linkState from "linkstate";

interface Props {
    prefill: Booking;
}

interface State {
    booking: Booking;
}

export default class CreateEvent extends Component<Props, State> {
    private handleFab = () => {
        alert("You clicked New!");
    };

    public constructor(props: Props) {
        super();
        this.setState({ booking: props.prefill });
    }

    public render(_: Props, { booking }: State): VNode {
        return (
            <Form>
                <FormGroup>
                    <Label id="label-title" for="title">
                        Titulo
                    </Label>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Titulo"
                    />
                </FormGroup>
                <FormGroup>
                    <Label id="label-description" for="desciption">
                        Descripción
                    </Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                    />
                </FormGroup>
                <Button
                    onClick={(event: Event): void => {
                        event.preventDefault();
                    }}
                >
                    Submit
                </Button>
            </Form>
        );
    }
}
