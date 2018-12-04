
Vue.component('checkin-status', {

  template: `
            <!-- <nav class="level"> -->
             <!-- left side -->
             <div class="columns checkin-info" >
              <div class="column is-one-third is-offset-one-fifth is-4">
                <label class="label check-in-header is-large">Check In</label>
                <div class="field is-grouped">
                  <p class="control">
                    <label class="label is-small status-header">Checked-in</label>
                  </p>
                  <p class="control">
                    <label class="label is-small status-header">Tickets Sold</label>
                  </p>
                </div>

                <div class="field is-grouped">
                  <p class="control">
                    <label class="label is-large status-number">{{ checkedIn }}</label>
                  </p>

                  <p class="control">
                    <label class="label is-large status-number">{{ ticketsSold }}</label>
                  </p>
                 </div>
              </div>

              <!-- lefel right -->
              <div class="column ">
                <div class="control">
                  <a class="button is-link">Sell Tickes</a>
                </div>
              </div>
            </div>

            `,

  data() {
    return {
      checkedIn: 86,
      ticketsSold: 450
    }
  }

});
