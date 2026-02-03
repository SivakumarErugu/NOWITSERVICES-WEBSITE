import React from "react";

const List = [{
    id: 1,
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025843/aaf4811753e18f9fd6dbc091cb772ec4c7a8d1f5_mhoicm.jpg"
}, {
    id: 2,
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025794/5aab5459786b226d5d70e39a1dfa0e817fee1e4d_di3wzg.jpg"
}, {
    id: 3,
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025805/38f5bd4531c814db74a5a556bbbc302c3c1da5c1_b0e8ir.jpg"
},
{
    id: 4,
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025734/ae9fe090925ae5576c390fa65546b255f1f765cd_is7pew.jpg"
},

]

const AvatarStack = ({
    list = List,
    size = 32,          // avatar size (px)
    overlap = 8,        // overlap amount (px)
    borderColor = "white",
}) => {
    return (
        <div className="flex items-center">
            {list.map((item, index) => (
                <div
                    key={item.id}
                    className="rounded-full overflow-hidden border-2"
                    style={{
                        width: size,
                        height: size,
                        marginLeft: index === 0 ? 0 : `-${overlap}px`,
                        zIndex: index + 1, // 🔥 later images on top
                        borderColor,
                    }}
                >
                    <img
                        src={item.url}
                        alt={`avatar-${item.id}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default AvatarStack;
