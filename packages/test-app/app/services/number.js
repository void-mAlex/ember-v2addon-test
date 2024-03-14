import Service, { service }  from '@ember/service';

export default class NumberService extends Service {
    @service router;
    a = 'number service works';
}
