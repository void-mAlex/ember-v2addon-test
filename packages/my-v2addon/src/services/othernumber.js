import Service, { service }  from '@ember/service';

export default class OthernumberService extends Service {
    @service router;
    a = 'other number works';
}
