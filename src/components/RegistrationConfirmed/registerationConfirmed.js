class Confirmation extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <TopNav />
            <Container className="mt-5">
              <h1 className="shadow-sm mt-5 p-3 rounded mb-5" id="heading">
                Email Confirmed Successfully!
              </h1>

              <Text>Please sign in again using your account information.</Text>
              <div className="text-center mt-3">
                <a href="/login">
                  <small class="sign-in">Sign In</small>
                </a>
              </div>
            </Container>
          </>
        );
    }
}
 
export default Confirmation;