
Vue.component('list',{
    props:{
        items:{
          type: Array,
          required: true
        },
        item_slots:{
            type: Array,
            required: true
        },
        name1:{
            type: String,
            default: "Not Working!"
        },
        name2:{
            type:String,
            default: "Not Working!"
        }
    },

    methods:{
        removeIt(item){
            this.$emit('finally-remove-item',item);
        },
        equipIt(item) {
            this.$emit('finally-equip-item',item);
        },
        favIt(item){
            this.$emit('finally-fav-item',item);
        }
    },

    template:`
          <v-row>
              <v-card class="mx-auto" width="95%">
                  <v-list class="grey darken-1 white--text">
                    <v-row>
                        <v-col>
                            <v-subheader class="white--text">{{name1}}</v-subheader>
                            <v-list>
                                <v-list-item-group color="primary">
                                    <ListItem :items="equipList"></ListItem>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                        <v-col>
                            <v-subheader class="white--text">{{name2}}</v-subheader>
                        </v-col>
                    </v-row>    
                        <v-list-item-group color="primary">
                              
                        </v-list-item-group>
                  </v-list>
              </v-card>
          </v-row>

`,

    computed:{

        equipList: function(){
            return this.items.filter(function(item){
                return item.equipped
            })
        },

        wantList: function(){
            return this.items.filter(function(item){
                return !item.equipped
            })
        },

    }


})
