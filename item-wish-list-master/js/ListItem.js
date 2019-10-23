Vue.component('ListItem',{
    props:{
        items: {
            type:Array,
            required: true
        },

    },

    methods: {
        removeIt(item) {

            this.$emit('remove-item',item);
        },

        equipIt(item){
            this.$emit('equip-item',item);
        },

        favIt(item){

            this.$emit('fav-item',item);
        }
    },

    template:`
                    <div class="item">
                      <v-list-item :class="item.rarity" v-for="(item, i) in items" :key="item.name"  class="list-group-item grey darken-1">  
                      <a href="https://www.wowhead.com/item=49286"><div class="tag">
                      <v-list-item-content>                          
                          <small class="white--text">{{item.slot}}:</small>
                                <v-list-item-title>{{item.name}}</v-list-item-title>
                                <v-list-item-subtitle class="white--text">
                                <span>Source: </span>
                                    <small>Equipped</small>
                                    <small>Source</small>
                                    <span class="item-buttons">
                                        <button class="btn btn-tiny" @click="favIt(item)"><i class="far fa-heart"></i></button>
                                        <button class="btn btn-tiny" @click="favIt(item)"><i class="fas fa-heart"></i></button>
                                        <button class="btn btn-tiny" @click="equipIt(item)"><i class="fas fa-plus-circle"></i></button>
                                        <button class="btn btn-tiny" @click="removeIt(item)"><i class="fas fa-minus-circle"></i></button>
                                    </span>
                                </v-list-item-subtitle>
                          </v-list-item-content>
                          </div></a>
                      </v-list-item>
                    </div>
`,

    computed:{

        itemList: function(){

            let newList = this.items.filter(item => item.slot==this.islot)

            return newList
        }



    }
})