import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date'),
  image: DS.attr('string'),
  location: DS.attr('string')
});
