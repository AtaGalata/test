const fcsite = "https://freecash.com/r/ayberk123"
const pass = "yuhamk0909A"
const refcode = "ayberk123"


const {Builder, By} = require('selenium-webdriver');
const fs = require('fs')

let driver = new Builder().forBrowser('chrome').build();
let driver1 = new Builder().forBrowser('chrome').build();

driver.manage().window().maximize()
driver1.manage().window().maximize()




var data = fs.readFileSync('username.txt', 'utf8')

const readMe = data.split(/\r?\n/) 
const lineCount = readMe.length
const randomLineNumber = Math.floor(Math.random() * lineCount)
const randomName = readMe[randomLineNumber]

driver.get(fcsite).then(() => {
    driver1.get("https://mail.tm/tr/").then(() => {

        ///-----------------------------Kayıt Ol
        setInterval(() => {
            console.log("a")
        }, 1000 * 15);
        driver.findElement(By.xpath('//*[@id="accounts-menu"]')).click()
        let email = driver.findElement(By.xpath('//*[@id="accounts-list"]/div/div[1]/p[2]')).getText()
        driver1.findElement(By.xpath("/html/body/header/div[4]/button[3]")).click()
        driver1.findElement(By.xpath('//*[@id="register-email"]')).sendKeys(email)
        driver1.findElement(By.xpath('//*[@id="register-username"]')).sendKeys(randomName)
        driver1.findElement(By.xpath('//*[@id="register-password"]')).sendKeys(pass)
        driver1.findElement(By.xpath('//*[@id="register-confirm-password"]')).sendKeys(pass)
        driver1.findElement(By.xpath('//*[@id="register-form-container"]/label')).click().then(() => {
           
            setTimeout(() => {
                driver1.findElement(By.xpath('//*[@id="register-button"]')).click()
            }, 1000 * 15)

            if(driver1.getTitle() == "Earn - Freecash.com"){

                ///-----------------------------Doğrula && Kasa Açma

                driver1.findElement(By.xpath('/html/body/div[8]/div[7]/div/div[2]/div[3]/div[1]/button')).click().then()
/*
                driver1.findElement(By.xpath('//*[@id="freeCaseModal"]/div/div[2]/div[3]/div[1]/button')).click()
*/
                ///-----------------------------Doğrula && Kasa Açma
            }else{
                driver1.findElement(By.xpath('//*[@id="register-button"]')).click()
            }


        ///-----------------------------Kayıt Ol

        })
    })
})

