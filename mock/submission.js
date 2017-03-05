const code1 = ```
# include <bits/stdc++.h>;

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
```;

export default [
  {
    id: 10000,
    code: code1,
    create_time: "2017-02-21T07:42:10.341215Z",
    last_update_time: "2017-02-21T07:42:10.341258Z",
  }
];