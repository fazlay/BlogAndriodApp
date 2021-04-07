import axios from 'axios';


export default axios.create({

    baseURL:'https://api.yelp.com/v3/businesses',
 headers:{
     Authorization: 'Bearer 2lZXKbENLHYZWMUKCCDxYxlp-dd34Hnb7NfJzBkUrq7EuiNJwKJUVpMHVaOjCokA0nF2fIepuRMAgu51IgV7qb5ugI2-eDHCDNjffdRFf8jxZHGqH47fwv_OnXUGYHYx'
 }
});

