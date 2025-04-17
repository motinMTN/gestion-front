import { PropsAuthCard } from "../../../../interfaces/auth/PropsAuthCard";

export function AuthCard(props: PropsAuthCard) {
	return (
		<div className="container mx-auto sm:px-4 mt-4rem custom_container">
			<div className="flex justify-center">
				<div className="">
					<div className=" p-6">
						<div className="flex flex-wrap ">
							<div className="xl:w-full md:w-full pr-4 pl-4">
								{props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}