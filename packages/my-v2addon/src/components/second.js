import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class SecondComponent extends Component {
    @service serviceA;
    @service othernumber;
}
