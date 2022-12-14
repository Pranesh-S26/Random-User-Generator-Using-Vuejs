const app = Vue.createApp({
  data(){
    return{
      firstName: 'John',
      email: 'john123@gmail.com',
      picture:'https://randomuser.me/api/portraits/men/10.jpg'
    }
  },
  methods:{

    async getUser(){
      
      const res =await fetch('https://randomuser.me/api/')
      const { results } = await res.json()


      this.firstName= results[0].name.first
      this.email= results[0].email
      this.picture=results[0].picture.large
    },

  }
})
app.mount('#app')