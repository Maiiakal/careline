class Confirmation extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <TopNav />
            <Container className="mt-5">
              <h1 className="shadow-sm mt-5 p-3 rounded mb-5" id="heading">
                Email Confirmed
              </h1>
              
              <Text>Please sign in using your account.</Text>
            </Container>
          </>
        );
    }
}
 
export default Confirmation;