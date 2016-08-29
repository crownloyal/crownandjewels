export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  this.get('/posts', function() {
    return { "posts": [{ 
      id: 1,
      title: 'Paris, mon amour. ♥',
      excerpt: 'Yadda',
      text: 'Yadda yadda yadda.',
      date: '2016-05-25T16:46:28Z',
      location: 'Paris, France' },
    { id: 2,
      title: 'Back home for Christmas.',
      text: 'Yeah yeah yeah.',
      excerpt: 'Yeah',
      date: '2016-12-18T16:46:28Z',
      image: 'http://lorempixel.com/400/200/sports',
      location: 'Leipzig, Germany' }]
    };
  });

 this.get('/posts/1', function() {
    return { "post": [{ 
      id: 1,
      title: 'Paris, mon amour. ♥',
      excerpt: 'Yadda',
      text: 'Yadda yadda yadda.',
      date: '2016-05-25T16:46:28Z',
      location: 'Paris, France' }]
    };
  });

 this.get('/posts/2', function() {
    return { "post": [{ 
      id: 2,
      title: 'Back home for Christmas.',
      excerpt: 'Yeah',
      text: 'Yeah yeah yeah.',
      date: '2016-08-18T16:46:28Z',
      image: 'https://lh3.googleusercontent.com/f8hsp4M5bfkGUjYDmsu0eTdLVk7pdZjuDlLVrE6GIrNYG371IpmWpfE3g8UFdJ7fJA511jHJVEwRcEbWFUzl9rVySFsxl_w3eHMrhDJs7eokG6HZwVprbs0ji_zGWuCKv-KgD0i2kibYxG4gsolJ9FB6kzBL-cR0Kso7QHASj8-gXtpPG5UXjsnLkqslTiJXwne1CXxkCXUITa1YYR7lZZS3_ya4jlRf4nF5bAfXOtwxzw13uDNc1XfzVvRE6iBjd011_Yo36urxSZoUBWeiq8iBVbwg7EsgF-zMURtP6jeq6EGAsN_gwLbaMeCRVg6OSWpp7hi_BwjjSNXKRZ-oof-uF9nEQKhSo3J7CZUhL_VlHwjU3jmESHUOvGl6avMMntVsGZe_jM50hc9CfWInNzpGIZ-P5WwVvgt76ybGMq-bD9Zy0pJOxXMKLewdbKu1KMS39cyBDjwbTvEQr0M5A3jVQhWn_cY23IlDPEF_bpk-0cVWsE-oEUhmDbsdXhjelokVp5Le3sle2PyrOHr3Z_cK1NzI9FMXn6o3d72PRm69nyt0ceSXD77_jnuoFWxIbCwh6KQvUmXKIsPZ8-7N3If9IxycTUyei0FOWoIMRonYfI3pPg=w956-h423-no',
      location: 'Leipzig, Germany' }]
    };
  });


  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
