
Vue.component('registrees', {

  props: ['people'],
  template: `
            <div class="columns">
            <div class="column is-offset-one-fifth">
            <table class="table is-hoverable is-striped">
              <thead>
                <tr>
                  <th class="headerTitle">Name</th>
                  <th class="headerTitle">Email</th>
                  <th class="headerTitle">Phone #</th>
                  <th class="headerTitle">Shirt Size</th>
                  <th class="headerTitle"></th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="registree in people">
                  <td> {{ registree.firstName }} {{ registree.lastName }} </td>
                  <td> {{ registree.email }}</td>
                  <td> {{ registree.phone }}</td>
                  <td class="shirt-size"> {{ registree.shirtSize }}</td>
                  <td v-if="!registree.registered"><a class="button is-primary is-rounded" v-on:click="$emit('check-in', registree.id)"  >Check In</a></td>
                  <td v-else><i class="fa fa-check fa-custom fa-2x"></i></td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>
            `
            // ,

  // data() {
  //
  //   return {
  //     registrees: [
  //       { firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '303-555-1212',   shirtSize: 'XL',  registered: false },
  //       { firstName: 'Susan', lastName: 'Doe', email: 'susan@doe.com', phone: '303-555-1212', shirtSize: 'M',   registered: false },
  //       { firstName: 'Jack', lastName: 'Doe', email: 'jack81@doe.com', phone: '303-555-1212', shirtSize: 'S',   registered: true },
  //       { firstName: 'Edwin', lastName: 'Doe', email: 'ed2@doe.com', phone: '303-555-1212',   shirtSize: 'S',   registered: false },
  //     ]
  //
  //   }
  // },



});
