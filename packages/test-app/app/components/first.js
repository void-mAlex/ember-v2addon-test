import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { TrackedObject } from 'tracked-built-ins';

export default class FirstComponent extends Component {
    @service number;
    @service serviceA;
    @service othernumber;
    a= new TrackedObject({});
}
