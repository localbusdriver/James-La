import Card from "@/components/card"

const Header = () => {
    return (
        <div className="flex items-center gap-1 w-full">
            <div className="flex flex-col h-full md:w-2/3">
                <Card>
                    <h1 className="text-6xl font-thin">James La</h1>
                    <h2 className="text-4xl text-gray-500 ml-32">Software Engineer</h2>
                </Card>
                <Card>
                    <h1 className="text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, a illo! Officiis eligendi cupiditate quis tempora impedit, praesentium amet eos voluptas sequi iste neque id dolorem earum nostrum repellendus optio labore error autem, debitis, exercitationem repudiandae sapiente numquam. Veniam eveniet sint voluptatibus, eum quisquam suscipit commodi similique eos culpa repudiandae.</h1>
                </Card>
            </div>
            <Card className="w-1/3">
                <h1 className="text-2xl font-semibold">Skills</h1>
                <h2 className="text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, a illo! Officiis eligendi cupiditate quis tempora impedit, praesentium amet eos voluptas sequi iste neque id dolorem earum nostrum repellendus optio labore error autem, debitis, exercitationem repudiandae sapiente numquam. Veniam eveniet sint voluptatibus, eum quisquam suscipit commodi similique eos culpa repudiandae.</h2>
            </Card>
        </div>
    )
}

export default Header;