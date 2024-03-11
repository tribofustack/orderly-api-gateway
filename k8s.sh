kubectl apply -f namespaces.yaml

kubectl config set-context --current --namespace=orderly

kubectl apply -f redis/k8s/

kubectl apply -f postgres/k8s/

kubectl apply -f orderly-api/k8s/

kubectl apply -f kong/k8s/

kubectl apply -f nginx/k8s/