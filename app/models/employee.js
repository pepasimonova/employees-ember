import DS from 'ember-data';

export default DS.Model.extend({ 
   firstName: DS.attr(),
   surname: DS.attr(),
   dateOfBirth: DS.attr(),
   incomeTax: DS.attr(),
   nationalInsurance: DS.attr()
});