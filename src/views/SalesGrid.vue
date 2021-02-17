/* eslint-disable no-dupe-keys */
<template>
  <div class="sales">
    <b-container class="Sales Header">
      <b-row>
        <b-col><h1>Sales <i>Grid</i></h1></b-col>
        <b-col class="d-flex align-items-center">
           {{ timeString }} test
        </b-col>
        <b-col class="d-flex align-items-center justify-content-end">
          <div>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key"/>
          </div>
        </b-col>
      </b-row>
          </b-container>
          <p class="border-top"></p>
          <v-button>
          test
          </v-button>
          <b-row variant="transparent">
    <b-col class="border" cols="12" md="8">

   <b-row class="center row container-fluid">
        <div class="row container-fluid">

            <div class="col-sm-6 col-lg-3 mt-3">

            <div class="card fluid bg-primary text-white">
              <div class="multi-button">
              <div class="card-body pb-1 md-flex justify-content-between">
                <div>
                  <div class="text-value-lg">9.823
                    </div>
                    <div>Members online
                      </div>
                      </div>
                    </div>
                    <div class="mt-2 mx-2" style="height: 35px;">
                    </div>
                    </div>
                    </div>
             </div>

                      <div class="col-sm-6 col-lg-3 mt-3">
                        <div class="card bg-info text-white">
                          <div class="card-body pb-0 d-flex justify-content-between">
                          <div><div class="text-value-lg">9.823</div><div>Members online</div></div>
                          </div>
                              <div class="mt-3 mx-3" style="height: 50px;">
                                </div></div></div>

                            <div class="col-sm-6 col-lg-3 mt-3">
                              <div class="card bg-warning text-white"><div class="card-body pb-0 d-flex justify-content-between">
                              <div><div class="text-value-lg">9.823</div>
                              <div>Members online</div></div>
                                </div><div class="mt-3" style="height: 70px;">
                                 </div></div></div>

                                  <div class="col-sm-6 col-lg-3 mt-3">
                                    <div class="card bg-danger text-white"><div class="card-body pb-0 d-flex justify-content-between">
                                    <div>
                                      <div class="text-value-lg">9.823</div>
                                  <div>Members online</div></div>
                                  </div>
                                      <div class="mt-3 mx-3" style="height: 50px;">
                                        </div></div>
                                        </div>

                                  <div class="col-sm-6 col-lg-3 mt-3">
                                  <div class="card bg-warning text-white"><div class="card-body pb-0 d-flex justify-content-between">
                                  <div><div class="text-value-lg">9.823</div>
                                  <div>Members online</div></div>
                                    </div><div class="mt-3" style="height: 70px;">
                                    </div></div></div>

                                  <div class="col-sm-6 col-lg-3 mt-3">
                                    <div class="card bg-danger text-white"><div class="card-body pb-0 d-flex justify-content-between">
                                    <div>
                                      <div class="text-value-lg">9.823</div>
                                  <div>Members online</div></div>
                                  </div>
                                      <div class="mt-3 mx-3" style="height: 50px;">
                                        </div></div>
                                        </div>

                                                                          <div class="col-sm-6 col-lg-3 mt-3">
                                    <div class="card bg-danger text-white"><div class="card-body pb-0 d-flex justify-content-between">
                                    <div>
                                      <div class="text-value-lg">9.823</div>
                                  <div>Members online</div></div>
                                  </div>
                                      <div class="mt-3 mx-3" style="height: 50px;">
                                        </div></div>
                                        </div>

                                                                          <div class="col-sm-6 col-lg-3 mt-3">
                                    <div class="card bg-danger text-white"><div class="card-body pb-0 d-flex justify-content-between">
                                    <div>
                                      <div class="text-value-lg">9.823</div>
                                  <div>Members online</div></div>
                                  </div>
                                      <div class="mt-3 mx-3" style="height: 50px;">
                                        </div></div>
                                        </div>

                                                                          <div class="col-sm-6 col-lg-3 mt-3">
                                    <div class="card bg-danger text-white"><div class="card-body pb-0 d-flex justify-content-between">
                                    <div>
                                      <div class="text-value-lg">9.823</div>
                                  <div>Members online</div></div>
                                  </div>
                                      <div class="mt-3 mx-3" style="height: 50px;">
                                        </div></div>
                                        </div>

  </div>

  </b-row>

    </b-col>
    <b-col class="border" cols="6" md="4">
                    <b-table :items="filteredData" :fields="fields" :small="true">
          <template #cell(extPrice)="{item}">
            {{ formatCurrency(item.quantity * item.price) }}
          </template>
        </b-table>
    </b-col>
          </b-row>
    </div>

</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    timeString: '',
    stopClock: false,
    /* fields: initial(Object.keys(sales[0])).concat([{
      key: 'extPrice',
      label: 'Ex. Price'
    }, last(Object.keys(sales[0]))]), */
    fields: [
      'name', 'QTY', 'extPrice'
    ],
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Test', icon: 'FileTextIcon' },
        { name: 'Test1', icon: 'FileTextIcon' },
        null,
        { name: 'Test2', icon: 'FileTextIcon' },
        null,
        { name: 'Test3', icon: 'FileTextIcon' }
      ]
    }].concat(userDropdown)
  }),
  mounted () {
    this.nowTime();
  },
  nowTime () {
    this.timeString = new Date(Date.now()).toLocaleDateString('en-US',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) +
        ' ' + new Date(Date.now()).toLocaleTimeString('en-US');
    if (!this.stopClock) {
      setTimeout(this.nowTime, 285);
    }
  }
};
</script>

<style lang="scss">

.card {
   width: 100vw;
   background-color: #cee3f5;
   margin: 0;
   font-family: helvetica;
}

.about {
   $cubic: cubic-bezier(0.64, 0.01, 0.07, 1.65);
   $transition: 0.6s $cubic;
   $size: 40px;
   position: fixed;
   z-index: 10;
   bottom: 10px;
   right: 10px;
   width: $size;
   height: $size;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   transition: all 0.2s ease;

   .bg_links {
      width: $size;
      height: $size;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(#fff, 0.2);
      border-radius: 100%;
      backdrop-filter: blur(5px);
      position: absolute;
   }

      &:hover {
      width: 105px;
      height: 105px;
      transition: all $transition;

      .logo {
         opacity: 1;
         transition: all 0.6s ease;
      }

      .social {
         opacity: 1;

         .icon {
            opacity: 0.9;
         }

         &:hover {
            background-size: 28px;
            .icon {
               background-size: 65%;
               opacity: 1;
            }
         }

         &.portfolio {
            right: 0;
            bottom: calc(100% - 40px);
            transition: all 0.3s 0s $cubic;
            .icon {
               &:hover {
                  background-color: #698fb7;
               }
            }
         }

         &.dribbble {
            bottom: 45%;
            right: 45%;
            transition: all 0.3s 0.15s $cubic;
            .icon {
               &:hover {
                  background-color: #ea4c89;
               }
            }
         }

         &.linkedin {
            bottom: 0;
            right: calc(100% - 40px);
            transition: all 0.3s 0.25s $cubic;
            .icon {
               &:hover {
                  background-color: #0077b5;
               }
            }
         }
      }
   }
}

.wrapper {
   width: 100vw;
   margin: 0 auto;
   height: 400px;
   background-color: #161616;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   transition: all 0.3s ease;
}

.content {
   max-width: 1024px;
   width: 100%;
   padding: 0 4%;
   padding-top: 250px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
}

@media screen and (max-width: 767px) {
   .content {
      padding-top: 300px;
      flex-direction: column;
   }
}

.card {
   width: 100%;
   max-width: 300px;
   min-width: 200px;
   height: 250px;
   background-color: #292929;
   margin: 10px;
   border-radius: 10px;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
   border: 2px solid rgba(7, 7, 7, 0.12);
   font-size: 16px;
   transition: all 0.3s ease;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   cursor: pointer;
   transition: all 0.3s ease;
}

.icon {
   margin: 0 auto;
   width: 100%;
   height: 80px;
   max-width:80px;
   background: linear-gradient(90deg, #FF7E7E 0%, #FF4848 40%, rgba(0, 0, 0, 0.28) 60%);
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   transition: all 0.8s ease;
   background-position: 0px;
   background-size: 200px;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

.card .title {
   width: 100%;
   margin: 0;
   text-align: center;
   margin-top: 30px;
   color: white;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 4px;
}

.card .text {
   width: 80%;
   margin: 0 auto;
   font-size: 13px;
   text-align: center;
   margin-top: 20px;
   color: white;
   font-weight: 200;
   letter-spacing: 2px;
   opacity: 0;
   max-height:0;
   transition: all 0.3s ease;
}

.card:hover {
   height: 270px;
}

.card:hover .info {
   height: 90%;
}

.card:hover .text {
   transition: all 0.3s ease;
   opacity: 1;
   max-height:40px;
}

.card:hover .icon {
   background-position: -120px;
   transition: all 0.3s ease;
}

.card:hover .icon i {
   opacity: 1;
   transition: all 0.3s ease;
}
</style>
