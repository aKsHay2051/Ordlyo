import { Card } from '@/components/ui/card';

const ChatMessage = ({
  sender,
  message,
  time,
  isSeller,
}: {
  sender: string;
  message: string;
  time: string;
  isSeller?: boolean;
}) => (
  <div
    className={`flex items-end gap-2 ${
      isSeller ? 'justify-end' : 'justify-start'
    }`}
  >
    <div
      className={`max-w-[75%] rounded-lg p-3 ${
        isSeller
          ? 'bg-[#dcf8c6] text-gray-800'
          : 'bg-white text-gray-800'
      }`}
    >
      {!isSeller && (
        <p className="text-xs font-bold text-blue-500 mb-1">{sender}</p>
      )}
      <p className="text-sm">{message}</p>
      <p className="text-right text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);

export function ProblemSection() {
  return (
    <section className="w-full bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">
              Managing orders on WhatsApp is messy.
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              If you're a small seller, you know the struggle. Orders get lost, details are missed, and customers get impatient.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto">
            <Card className="shadow-2xl rounded-2xl overflow-hidden bg-[#ece5dd]">
              <div className="bg-gray-100 p-3">
                 <p className="text-center font-semibold text-gray-800">Customer Chat</p>
              </div>
              <div className="p-4 space-y-4 h-96 overflow-y-auto bg-[url('https://i.redd.it/qwd83gr4b2561.png')] bg-cover bg-center">
                <ChatMessage
                  sender="Jane Doe"
                  message="Hi! I'd like to order one of your handmade ceramic mugs please!"
                  time="10:30 AM"
                />
                <ChatMessage
                  sender="You"
                  message="Of course! Which design would you like?"
                  time="10:31 AM"
                  isSeller
                />
                <ChatMessage
                  sender="Jane Doe"
                  message="The one with the blue flowers. And can you ship it to 123 Flower Lane?"
                  time="10:32 AM"
                />
                <ChatMessage
                  sender="You"
                  message="Got it! That will be $25 including shipping. Please send payment to my PayNow."
                  time="10:33 AM"
                  isSeller
                />
                <div className="text-center my-2">
                    <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-3 py-1">2 DAYS LATER</span>
                </div>
                <ChatMessage
                  sender="Mark Smith"
                  message="Hey! Where is my order?? You said it would be here by yesterday!"
                  time="3:15 PM"
                />
                 <ChatMessage
                  sender="You"
                  message="I'm so sorry, let me check on that for you. Can you remind me what you ordered?"
                  time="3:16 PM"
                  isSeller
                />
                <ChatMessage
                  sender="Mark Smith"
                  message="Are you serious? The blue flower mug. For my wife's birthday tomorrow! 🤦‍♂️"
                  time="3:17 PM"
                />
                 <ChatMessage
                  sender="You"
                  message="Oh no, I am so sorry! I think I sent that to another customer by mistake. Let me sort this out..."
                  time="3:18 PM"
                  isSeller
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}