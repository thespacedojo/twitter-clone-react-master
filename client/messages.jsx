import React from 'react';
import {Alert} from 'react-bootstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

const FlashMessages = new Mongo.Collection(null);

class FlashDisplay extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.messages = this.messages.bind(this);
  }
  messages() { return FlashMessages.find().fetch(); }
  dismiss(message, event) { FlashMessages.remove({_id: message._id}) }
  render() {
    return (
      <div className="col-sm-12">
        {this.messages().map((m) => {
          return <Alert key={m._id} dimissAfter={5000} onDismiss={this.dismiss.bind(this, m)} bsStyle={m.type}>{m.message}</Alert>
        })}
      </div>
    );
  }
}

export {FlashMessages, FlashDisplay}
