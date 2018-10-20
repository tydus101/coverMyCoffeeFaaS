from urllib2 import Request, urlopen
import json

def requestCaller(category, campaign_id):
    """general function to call requests for creating campaigns or links to the
    """
    if category == 'campaign':
        request = Request('https://api-testbed.giftbit.com/papi/v1/' + category, data=values, headers=headers)
    elif category == 'link':
        request = Request('https://api-testbed.giftbit.com/papi/v1/links/' + campaign_id, headers=headers)
        response_body = urlopen(request).read()
        parsed_rb = json.loads(response_body)
        link = parsed_rb['shortlinks'][0]['shortlink']
        print link
        return link
    response_body = urlopen(request).read()
    print response_body

campaign_id = "GTmkLZ9aNN"
brand_code = "nike"
api_key = ("eyJ0eXAiOiJKV1QiLCJhbGciOiJTSEEyNTYifQ==.dGg1eTIvRDk2UnRSN01LUlFlM"+
"HdscTBpdkN0cENOeEJGKzRyeEVmSFVUYmNPa25KdTF2ZDRyTTAwWlBhMSs4M3hCOFZWVTQvQXhMR"+
"05ZMkhWdUJIRFc2WkxpSmQwelFyR0J0NFhSaFk5Z1FCQnhxdmNkektFYk1TeC9GNXhHczQ=.gGQ/"+
"SZxU+UJocr0yaryxEPMmZPI/1fIeMbJuKkqrJmc=")

values = """
  {
    "gift_template":"ECEHN",
    "delivery_type":"SHORTLINK",
    "link_count":"1",
    "price_in_cents": 5000,
    "brand_codes": ["nike"],
    "expiry": "2019-01-01",
    "id": """ + campaign_id + "\n}"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + api_key
}

category_prompt = str(raw_input("What category? ")).lower()
requestCaller(category_prompt, campaign_id)
