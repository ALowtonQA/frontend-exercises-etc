package selenium.pages;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.WebElement;

public class Login {

	@FindBy(name = "username")
	private WebElement username;
	
	@FindBy(name = "password")
	private WebElement password; 
	
	@FindBy(xpath = "/html/body/table/tbody/tr/td[1]/big/blockquote/blockquote/font/center/b")
	private WebElement msg; 
	
	public void loginInfo(String username, String password) {
		this.username.sendKeys(username);
		this.password.sendKeys(password);
		this.password.submit();
	}

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getMsg() {
		return msg;
	}
}
