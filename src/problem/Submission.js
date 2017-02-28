import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dropdown, Image, Icon, Label, Segment, TextArea, Form } from 'semantic-ui-react';


const mockDetail = `
<pre>
# include <bits/stdc++.h>

using namespace std;

#define pii pair <int, int>
#define pll pair <ll, ll>
#define pb push_back
#define eb emplace_back
#define mp make_pair
#define maxe *max_element
#define fi first
#define se second
#define y0 Zhasulan
#define y1 Nurlynek

typedef long long ll;
typedef long double ld;
typedef unsigned long long ull;

const int inf = (int)1e9 + 7;
const int maxn = (ll)4e5 + 7;
const int lmaxn = (int)1e6 + 7;
const ll linf = (ll)1e18 + 7;

ll gcd(ll a, ll b){
    while(b) a %= b, swap(a, b);
    return a | b;
}

ll lcm(ll a, ll b){
    return a * b / gcd(a, b);
}
ll mul(ll a, ll b, ll mod)
{
    ll ans=0;
    while(b)
    {
        if(b&1)
        {
            ans+=a;
            if(ans>=mod)
                ans-=mod;
        }
        a+=a;
        if(a>=mod)
            a-=mod;
        b/=2;
    }
    return ans;
}
ll bin(ll a, ll n, ll mod)
{
    ll ans=1;
    while(n)
    {
        if(n&1)
            ans=mul(ans,a,mod);
        a=mul(a,a,mod);
        n/=2;
    }
    return ans;
}
bool isPrime(ll n)
{
    if(n == 1)
        return 0;
    for(ll i = 1; i <= 20; i++)
        if(bin(rand() % (n - 1) + 1, n - 1, n) != 1)
            return 0;
    for(ll i = 2; i <= min(20LL, n - 1); i++)
        if(n % i == 0)
            return 0;
    return 1;
}
ll a, b, c;
int main(){
    cin >> a >> b >> c;
    if(b + c < a || (a > b && a > c)){
        cout << -1;
        return 0;
    }
    cout << c / a + b / a;
    return 0;
}
</pre>
`;


class Submission extends React.Component {

  constructor(props) {
    super(props);
    this.state = {id: '24753177'}
  }

  render() {
    // return (
    //   <Card style={{marginBottom: 15}}>
    //     <CardHeader
    //       title={"Submission #" + this.state.id}
    //       subtitle="Submitted at 18:37 Dec. 26, 2016"
    //       avatar={<ImageEdit/>}
    //       showExpandableButton={true}
    //       actAsExpander={true}
    //     />
    //     <CardText expandable={true}>
    //       <div dangerouslySetInnerHTML={{__html: mockDetail}}></div>
    //     </CardText>
    //     <CardActions expandable={true}>
    //       <FlatButton secondary={true} label="View Running Details"/>
    //     </CardActions>
    //   </Card>
    // );
    return (
      <Segment raised>
        <Label color="blue" ribbon={true}>{"Submission #" + this.state.id}</Label>
        <br/><br/>
        <p>Author: TooDifficult; submitted at 18:37 Dec. 26, 2016</p>
        <div dangerouslySetInnerHTML={{__html: mockDetail}}></div>
      </Segment>
    );
  }
}

export default Submission;