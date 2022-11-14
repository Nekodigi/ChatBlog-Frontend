import Preview  from 'components/preview';
import { useRouter } from "next/router";

export default function PreviewView() {
  const router = useRouter()
  const id = router.query.id;

  return (
    <Preview id={id} router={router} />
  );
}