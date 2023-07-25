const Discord = require("discord.js");
const {Builder, By, Key} = require('selenium-webdriver');

exports.run = async (client, message, args) => {
  let driver = new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize()
  const mesaj = message.channel.send("Siteye Giriliyor...")
  driver.get("https://ploudos.com/login/").then(() => {
    mesaj.then(m => m.edit("Giriş Yapılıyor..."))
    driver.findElement(By.xpath('/html/body/div[1]/form/div[1]/input')).sendKeys("AtaGalata")
    driver.findElement(By.xpath('/html/body/div[1]/form/div[2]/input')).sendKeys("yuhamk0909A.")
    driver.findElement(By.xpath("/html/body/div[1]/form/button")).click().then(() => {
      driver.get("https://ploudos.com/manage/1/").then(() => {
        driver.findElement(By.xpath('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]')).click().then(() => {
          mesaj.then(m => m.edit("Sunucu Açılıyor..."))
          let sdurum = "Kapalı"
          setTimeout(() => {
            function durum() {
              driver.findElement(By.xpath('//*[@id="status"]/table/tbody/tr[1]/td[2]/span')).getText().then(a => {
                console.log(a)
                if(a === "Offline") return;
                if(a === "Online") return sdurum = "Açık"
                else return sdurum = "Açılıyor"
              })
            }
            durum()
            setTimeout(() => {
              if(sdurum === "Açık") return mesaj.then(m => m.edit("Sunucu Zaten Açık !"))
              if(sdurum === "Açılıyor") return mesaj.then(m => m.edit("Sunucu Zaten Açılıyor !"))
            }, 500)
          },1000);
        })
      })
    }) 
  })
}
exports.conf = {
  aliases: [], //Ana Komut Dışında Çalıştırabilecek Yan Komutlar
  komut: "baslat" //Ana Komut
};