import Service, { service } from '@ember/service';

export default class ServiceA extends Service {
    @service router;
    a = 'service A works';
}