const LinkSocialMedia = {
  github: 'Van-Dev2021',
  youtube: 'van.dev2021',
  facebook: 'van.dev2021',
  istagram: 'van.dev2021'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  //ARROW FUNCTIONS
  //function nomedafuncao(arguentos){
  //argumento => {}
}

getGitHubProfileInfos()
