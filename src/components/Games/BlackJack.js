

export default function Blackjack() {

    const Cards = [
        {suit: "clubs", rank: "ace", value: 1, img: "fronts/clubs_ace.svg"},
        {suit: "clubs", rank: "two", value: 2, img: "fronts/clubs_2.svg"},
        {suit: "clubs", rank: "three", value: 3, img: "fronts/clubs_3.svg"},
        {suit: "clubs", rank: "four", value: 4, img: "fronts/clubs_4.svg"},
        {suit: "clubs", rank: "five", value: 5, img: "fronts/clubs_5.svg"},
        {suit: "clubs", rank: "six", value: 6, img: "fronts/clubs_6.svg"},
        {suit: "clubs", rank: "seven", value: 7, img:"fronts/clubs_7.svg" },
        {suit: "clubs", rank: "eight", value: 8, img: "fronts/clubs_8.svg"},
        {suit: "clubs", rank: "nine", value: 9, img: "fronts/clubs_9.svg"},
        {suit: "clubs", rank: "ten", value: 10, img: "fronts/clubs_10.svg"},
        {suit: "clubs", rank: "jack", value: 10, img: "fronts/clubs_jack.svg"},
        {suit: "clubs", rank: "queen", value: 10, img:"fronts/clubs_queen.svg" },
        {suit: "clubs", rank: "king", value: 10, img: "fronts/clubs_king.svg"},
        {suit: "diamonds", rank: "ace", value: 1, img: "fronts/diamonds_ace.svg"},
        {suit: "diamonds", rank: "two", value: 2, img: "fronts/diamonds_2.svg"},
        {suit: "diamonds", rank: "three", value: 3, img: "fronts/diamonds_3.svg"},
        {suit: "diamonds", rank: "four", value: 4, img: "fronts/diamonds_4.svg"},
        {suit: "diamonds", rank: "five", value: 5, img: "fronts/diamonds_5.svg"},
        {suit: "diamonds", rank: "six", value: 6, img: "fronts/diamonds_6.svg"},
        {suit: "diamonds", rank: "seven", value: 7, img:"fronts/diamonds_7.svg" },
        {suit: "diamonds", rank: "eight", value: 8, img: "fronts/diamonds_8.svg"},
        {suit: "diamonds", rank: "nine", value: 9, img: "fronts/diamonds_9.svg"},
        {suit: "diamonds", rank: "ten", value: 10, img: "fronts/diamonds_10.svg"},
        {suit: "diamonds", rank: "jack", value: 10, img: "fronts/diamonds_jack.svg"},
        {suit: "diamonds", rank: "queen", value: 10, img:"fronts/diamonds_queen.svg" },
        {suit: "diamonds", rank: "king", value: 10, img: "fronts/diamonds_king.svg"},
        {suit: "hearts", rank: "ace", value: 1, img: "fronts/hearts_ace.svg"},
        {suit: "hearts", rank: "two", value: 2, img: "fronts/hearts_2.svg"},
        {suit: "hearts", rank: "three", value: 3, img: "fronts/hearts_3.svg"},
        {suit: "hearts", rank: "four", value: 4, img: "fronts/hearts_4.svg"},
        {suit: "hearts", rank: "five", value: 5, img: "fronts/hearts_5.svg"},
        {suit: "hearts", rank: "six", value: 6, img: "fronts/hearts_6.svg"},
        {suit: "hearts", rank: "seven", value: 7, img:"fronts/hearts_7.svg" },
        {suit: "hearts", rank: "eight", value: 8, img: "fronts/hearts_8.svg"},
        {suit: "hearts", rank: "nine", value: 9, img: "fronts/hearts_9.svg"},
        {suit: "hearts", rank: "ten", value: 10, img: "fronts/hearts_10.svg"},
        {suit: "hearts", rank: "jack", value: 10, img: "fronts/hearts_jack.svg"},
        {suit: "hearts", rank: "queen", value: 10, img:"fronts/hearts_queen.svg" },
        {suit: "hearts", rank: "king", value: 10, img: "fronts/hearts_king.svg"},
        {suit: "spades", rank: "ace", value: 1, img: "fronts/spades_ace.svg"},
        {suit: "spades", rank: "two", value: 2, img: "fronts/spades_2.svg"},
        {suit: "spades", rank: "three", value: 3, img: "fronts/spades_3.svg"},
        {suit: "spades", rank: "four", value: 4, img: "fronts/spades_4.svg"},
        {suit: "spades", rank: "five", value: 5, img: "fronts/spades_5.svg"},
        {suit: "spades", rank: "six", value: 6, img: "fronts/spades_6.svg"},
        {suit: "spades", rank: "seven", value: 7, img:"fronts/spades_7.svg" },
        {suit: "spades", rank: "eight", value: 8, img: "fronts/spades_8.svg"},
        {suit: "spades", rank: "nine", value: 9, img: "fronts/spades_9.svg"},
        {suit: "spades", rank: "ten", value: 10, img: "fronts/spades_10.svg"},
        {suit: "spades", rank: "jack", value: 10, img: "fronts/spades_jack.svg"},
        {suit: "spades", rank: "queen", value: 10, img:"fronts/spades_queen.svg" },
        {suit: "spades", rank: "king", value: 10, img: "fronts/spades_king.svg"},
       
    ]

    return (
        <div>
            {Cards.map(card => {
                return (
                    <img src={card.img} alt="card" />
                )
            })}
        </div>
    )

}