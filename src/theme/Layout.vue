<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <!-- <div class="container"> -->
        <!-- <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <a class="navbar-brand" href="/">
          <img src="http://bit.ly/vue-img" alt="CLinic Systems">
        </a>
      <!-- </div> -->
    </nav>
    <section class="main-section section">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="(patient, name) in patients" v-bind:key="patient.id">
            <div class="card" style='display: inline-block;'>
              <div class="card-content">
                <h3>{{patient.name}}</h3>
                {{patient.address}}
                {{patient.phone}}
                {{patient.reason}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="row">
          تتبعنا على
          <a href="https://www.facebook.com/AlnarjessClinic/" target="_blank">Facebook</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        patients: [
          {id: 1, name: 'محمد عثمان علي', address: 'مشروع الهضبة', phone: '092-546-5555', reason: 'الم بالاسنان العلوية وتسوس بالفك السفلي'},
          {id: 2, name: 'محمد عثمان علي', address: 'مشروع الهضبة', phone: '092-546-5555', reason: 'الم بالاسنان العلوية وتسوس بالفك السفلي'},
          {id: 3, name: 'محمد عثمان علي', address: 'مشروع الهضبة', phone: '092-546-5555', reason: 'الم بالاسنان العلوية وتسوس بالفك السفلي'},
          {id: 4, name: 'محمد عثمان علي', address: 'مشروع الهضبة', phone: '092-546-5555', reason: 'الم بالاسنان العلوية وتسوس بالفك السفلي'},
          {id: 5, name: 'محمد عثمان علي', address: 'مشروع الهضبة', phone: '092-546-5555', reason: 'الم بالاسنان العلوية وتسوس بالفك السفلي'},
          {id: 6, name: 'محمد عثمان علي', address: 'مشروع الهضبة', phone: '092-546-5555', reason: 'الم بالاسنان العلوية وتسوس بالفك السفلي'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  .navbar-brand {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
    .container {
      padding-right: 15px;
      padding-left: 15px;
      text-align: center;
    }
  }
</style>
