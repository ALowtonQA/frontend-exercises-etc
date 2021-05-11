package selenium.pages;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.WebElement;


public class NewUser {
	
	@FindBy(name="username")
	private WebElement username; 
	
	@FindBy(name="password")
	private WebElement password;
	
	public void createUser(String username, String password) {
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
}
