const user1 = {
  name: " CArlos",
  username: "joako",
  country: "argentina",
  social: {
    facebook: "facebook.com",
    twitter: "kokacola",
  },
};

const saluda = (user) => {
    const { name, social} = user
    const { twitter } = social

    console.log(`HOla soy ${name} y vivo en ${twitter}`)
}

saluda(user1)